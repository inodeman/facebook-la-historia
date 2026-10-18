import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from "lucide-react";
import { cues, FILM_DURATION, type Cue } from "@/film/script";
import { SCENES } from "@/film/scenes";

const CHANNEL = "https://www.youtube.com/user/inodeEntertainment";

function clock(seconds: number) {
  const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0;
  const m = Math.floor(safe / 60);
  const s = Math.floor(safe % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function cueAt(time: number): Cue {
  let lo = 0;
  let hi = cues.length - 1;
  let answer = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (cues[mid].start <= time) {
      answer = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return cues[answer];
}

export function Documentary() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [duration, setDuration] = useState(FILM_DURATION);
  const [reduce, setReduce] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);

  const cue = cueAt(Math.min(time, Math.max(0, duration - 0.05)));
  const scene = SCENES[cue.scene];
  const showClose = started && (ended || cue.chapterId === "cierre");

  const chapters = useMemo(() => {
    const list: { id: string; title: string; year: string; start: number }[] = [];
    for (const item of cues) {
      if (!list.some((entry) => entry.id === item.chapterId)) {
        list.push({
          id: item.chapterId,
          title: item.chapter,
          year: item.year,
          start: item.start,
        });
      }
    }
    return list;
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    if (playing) void video.play().catch(() => undefined);
    else video.pause();
  }, [playing, cue.scene, reduce]);

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    const tick = () => {
      const audio = audioRef.current;
      if (audio) setTime(audio.currentTime);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
      if (event.code === "Space") {
        event.preventDefault();
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
          setStarted(true);
          setEnded(false);
          void audio.play().catch(() => undefined);
        } else {
          audio.pause();
        }
      } else if (event.code === "ArrowRight") {
        const audio = audioRef.current;
        seek((audio?.currentTime ?? 0) + 10);
      } else if (event.code === "ArrowLeft") {
        const audio = audioRef.current;
        seek((audio?.currentTime ?? 0) - 10);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function seek(next: number) {
    const audio = audioRef.current;
    const cap = duration || FILM_DURATION;
    const clamped = Math.min(Math.max(0, next), cap);
    if (audio) audio.currentTime = clamped;
    setTime(clamped);
    setEnded(false);
  }

  function seekBy(delta: number) {
    const audio = audioRef.current;
    seek((audio?.currentTime ?? time) + delta);
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      setStarted(true);
      setEnded(false);
      void audio.play().catch(() => undefined);
    } else {
      audio.pause();
    }
  }

  function jump(start: number) {
    setStarted(true);
    setEnded(false);
    seek(start);
    const audio = audioRef.current;
    if (audio?.paused) void audio.play().catch(() => undefined);
  }

  return (
    <main className="min-h-screen bg-ink text-cream">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:px-8 md:py-8">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-medium tracking-widest text-tungsten uppercase">
              InodeAI presenta
            </p>
            <h1 className="font-display text-3xl leading-none font-medium md:text-5xl">
              Facebook: la historia
            </h1>
          </div>
          <p className="hidden text-right text-sm text-ash sm:block">
            Documental
            <span className="block text-cream">16:9 · reconstrucción 3D</span>
          </p>
        </header>

        <section className="overflow-hidden rounded-lg bg-ink shadow-lg" aria-label="Pantalla del documental">
          <div className="relative aspect-video bg-ink">
            {reduce ? (
              <img src={scene.still} alt={scene.alt} className="h-full w-full object-cover" />
            ) : (
              <video
                ref={videoRef}
                key={scene.id}
                className="scene-in h-full w-full object-cover"
                poster={scene.still}
                src={scene.clip}
                muted
                loop
                playsInline
                preload="metadata"
              />
            )}
            <div className="vignette pointer-events-none absolute inset-0" />

            {started && !showClose && (
              <div className="pointer-events-none absolute top-0 left-0 p-4 md:p-6">
                <p className="font-sans text-xs tracking-widest text-tungsten uppercase">
                  {cue.year ? cue.year : cue.kicker}
                </p>
                <p className="font-display text-2xl leading-tight md:text-3xl">{cue.chapter}</p>
              </div>
            )}

            {!started && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center">
                <p className="font-sans text-xs tracking-widest text-tungsten uppercase">
                  Un documental · 15 min
                </p>
                <p className="font-display text-3xl leading-none md:text-5xl">La red que no se apaga</p>
                <button
                  type="button"
                  onClick={toggle}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-cream px-5 font-sans font-medium text-ink"
                >
                  <Play aria-hidden="true" size={18} />
                  Reproducir
                </button>
              </div>
            )}

            {showClose && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/80 px-6 text-center">
                <p className="font-sans text-xs tracking-widest text-tungsten uppercase">InodeAI</p>
                <h2 className="font-display text-4xl leading-none md:text-5xl">Sígueme</h2>
                <p className="max-w-md text-sm text-cream md:text-base">
                  Documentales para mirar el mundo con más calma y más filo. El próximo empieza cuando tú llegas.
                </p>
                <a
                  href={CHANNEL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg bg-blue px-5 font-sans font-medium text-cream"
                >
                  Suscribirme en YouTube
                </a>
              </div>
            )}

            {started && captionsOn && !showClose && (
              <p className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-4 text-center font-sans text-sm leading-snug text-cream md:px-10 md:pb-6 md:text-lg">
                {cue.text}
              </p>
            )}
          </div>
        </section>

        <div className="flex flex-col gap-2">
          <div
            role="slider"
            aria-label="Línea de tiempo"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration || FILM_DURATION)}
            aria-valuenow={Math.round(Math.min(time, duration || FILM_DURATION))}
            aria-valuetext={clock(time)}
            className="flex h-11 items-center"
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0;
              seek(ratio * (duration || FILM_DURATION));
            }}
          >
            <span className="block h-1 w-full rounded-lg bg-ash/30">
              <span
                className="block h-full rounded-lg bg-blue"
                style={{ width: `${duration > 0 ? Math.min(100, (time / duration) * 100) : 0}%` }}
              />
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pausar" : "Reproducir"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cream text-ink"
              >
                {playing ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                type="button"
                onClick={() => seekBy(-10)}
                aria-label="Retroceder diez segundos"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-cream ring-1 ring-ash/40"
              >
                <RotateCcw size={18} />
              </button>
              <button
                type="button"
                onClick={() => seekBy(10)}
                aria-label="Adelantar diez segundos"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-cream ring-1 ring-ash/40"
              >
                <RotateCw size={18} />
              </button>
              <button
                type="button"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-cream ring-1 ring-ash/40"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                type="button"
                onClick={() => setCaptionsOn((value) => !value)}
                aria-pressed={captionsOn}
                className="inline-flex h-11 items-center rounded-lg px-3 font-sans text-sm text-cream ring-1 ring-ash/40"
              >
                {captionsOn ? "CC" : "CC off"}
              </button>
            </div>
            <p className="font-sans text-sm text-ash tabular-nums">
              <span className="text-cream">{clock(time)}</span>
              {" / "}
              {clock(duration)}
            </p>
          </div>
        </div>

        <nav aria-label="Capítulos" className="flex gap-2 overflow-x-auto pb-2">
          {chapters.map((chapter, index) => {
            const active = chapter.id === cue.chapterId;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => jump(chapter.start)}
                className={`min-h-11 shrink-0 rounded-lg px-3 text-left ring-1 ${
                  active ? "bg-cream text-ink ring-cream" : "text-cream ring-ash/40"
                }`}
              >
                <span className="block font-sans text-xs tracking-widest uppercase opacity-80">
                  {String(index + 1).padStart(2, "0")}
                  {chapter.year ? ` · ${chapter.year}` : ""}
                </span>
                <span className="block font-sans text-sm font-medium">{chapter.title}</span>
              </button>
            );
          })}
        </nav>

        <p className="text-sm leading-relaxed text-ash">
          Imágenes de reconstrucción 3D, no archivo de la época. La narración sigue los hechos públicos:
          de Facemash, en 2003, al nombre Meta y la cifra de usuarios de 2026.
        </p>
      </div>

      <audio
        ref={audioRef}
        src="/film/narration.mp3"
        preload="auto"
        muted={muted}
        onLoadedMetadata={() => {
          const audio = audioRef.current;
          if (audio && Number.isFinite(audio.duration)) setDuration(audio.duration);
        }}
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
          setTime(duration);
        }}
      />
    </main>
  );
}
