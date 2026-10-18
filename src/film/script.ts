export type SceneId =
  | "city"
  | "dorm"
  | "facemash"
  | "quad"
  | "house"
  | "feed"
  | "photos"
  | "ipo"
  | "campus"
  | "vr"
  | "hearing"
  | "phone";

export type Cue = {
  start: number;
  end: number;
  text: string;
  scene: SceneId;
  chapterId: string;
  chapter: string;
  kicker: string;
  year: string;
};

export const cues: Cue[] = [
  {
    "start": 0.06,
    "end": 9.18,
    "text": "Hay una luz que conoces mejor que la de tu propia cocina. Es azul. Aparece en el bolsillo a las dos de la mañana, cuando deberías estar durmiendo.",
    "scene": "city",
    "chapterId": "luz",
    "chapter": "La luz azul",
    "kicker": "Apertura",
    "year": ""
  },
  {
    "start": 9.18,
    "end": 17.26,
    "text": "Detrás de esa luz hay una compañía que empezó en un cuarto de universidad y terminó en el centro de la vida de miles de millones de personas.",
    "scene": "city",
    "chapterId": "luz",
    "chapter": "La luz azul",
    "kicker": "Apertura",
    "year": ""
  },
  {
    "start": 17.26,
    "end": 28.0,
    "text": "Esta es la historia de Facebook. No la de un logo. La de una idea simple, y peligrosa: que la vida social podía ordenarse, medirse y, con el tiempo, venderse.",
    "scene": "city",
    "chapterId": "luz",
    "chapter": "La luz azul",
    "kicker": "Apertura",
    "year": ""
  },
  {
    "start": 28.0,
    "end": 38.8,
    "text": "En octubre de 2003, Mark Zuckerberg tiene diecinueve años y estudia en Harvard. Es un programador rápido, competitivo, y una noche convierte una pregunta en un sitio.",
    "scene": "dorm",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Harvard",
    "year": "2003"
  },
  {
    "start": 38.8,
    "end": 48.46,
    "text": "La pregunta parece un juego. Quién es más atractivo. El sitio se llama Facemash, y pone dos fotos de estudiantes, una junto a la otra, para que elijas.",
    "scene": "dorm",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Harvard",
    "year": "2003"
  },
  {
    "start": 48.46,
    "end": 58.98,
    "text": "Las fotos no se las dieron. Las toma de los directorios internos de las casas de Harvard, sin permiso. En horas el sitio se vuelve viral y la red de la universidad se tambalea.",
    "scene": "facemash",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Harvard",
    "year": "2003"
  },
  {
    "start": 58.98,
    "end": 70.0,
    "text": "La administración lo apaga. Zuckerberg enfrenta un proceso disciplinario. El sitio muere. La lección no. La intimidad de otra persona, puesta en una pantalla, es un imán.",
    "scene": "facemash",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Harvard",
    "year": "2003"
  },
  {
    "start": 70.0,
    "end": 79.9,
    "text": "Facemash no es Facebook. Es la chispa sucia. Ya existían Friendster y MySpace: amigos, perfiles recargados, spam y fama de escenario.",
    "scene": "facemash",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Antes",
    "year": "2003"
  },
  {
    "start": 79.9,
    "end": 90.34,
    "text": "Zuckerberg no quiere un escenario. Quiere un directorio. Limpio. Real. Con tu nombre verdadero. Desde el principio, la identidad no es un detalle. Es el producto.",
    "scene": "dorm",
    "chapterId": "chispa",
    "chapter": "Facemash",
    "kicker": "Antes",
    "year": "2003"
  },
  {
    "start": 90.34,
    "end": 104.6,
    "text": "El 4 de febrero de 2004, desde un dormitorio de Harvard, se enciende thefacebook punto com. Eduardo Saverin pone dinero. Dustin Moskovitz programa. Chris Hughes lo explica. Andrew McCollum ayuda con el diseño.",
    "scene": "quad",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "4 de febrero",
    "year": "2004"
  },
  {
    "start": 104.6,
    "end": 115.4,
    "text": "La promesa cabe en una frase. Mira quién está en tu clase, en tu casa, en tu vida, y conéctate. En las primeras veinticuatro horas se registran más de mil doscientos estudiantes.",
    "scene": "quad",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "4 de febrero",
    "year": "2004"
  },
  {
    "start": 115.4,
    "end": 125.53,
    "text": "No hay famosos. No hay anonimato. Si estás, eres tú. En pocas semanas el campus se llena de perfiles. La red empieza a saltar de universidad en universidad.",
    "scene": "quad",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "El club",
    "year": "2004"
  },
  {
    "start": 125.53,
    "end": 135.13,
    "text": "En marzo llega a Stanford, a Columbia y a Yale. El truco no es solo técnico. Es social. Facebook no abre la puerta a todo el mundo. La cierra.",
    "scene": "quad",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "El club",
    "year": "2004"
  },
  {
    "start": 135.13,
    "end": 144.55,
    "text": "Solo entras si tu correo termina en punto edu. La escasez vuelve al sitio deseable. MySpace gritaba. Esto susurraba: aquí están los tuyos.",
    "scene": "quad",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "El club",
    "year": "2004"
  },
  {
    "start": 144.55,
    "end": 156.63,
    "text": "Ese año nace una disputa que el cine va a convertir en leyenda. Los hermanos Winklevoss y Divya Narendra dicen que Zuckerberg debía programar su red, HarvardConnection, y que usó la idea para la suya.",
    "scene": "house",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "La disputa",
    "year": "2004"
  },
  {
    "start": 156.63,
    "end": 170.57,
    "text": "Años después hay demanda y, en 2008, un acuerdo: dinero y acciones. Las versiones no coinciden, y Zuckerberg ha dicho que la película se toma libertades serias. Hubo conflicto. Hubo pago. Y hubo un mito.",
    "scene": "house",
    "chapterId": "campus",
    "chapter": "Thefacebook",
    "kicker": "La disputa",
    "year": "2008"
  },
  {
    "start": 170.57,
    "end": 182.61,
    "text": "En el verano de 2004 el proyecto se muda a Palo Alto. Una casa. Cables por el suelo. Cajas de pizza. Sean Parker, el de Napster, entra y abre una puerta que vale más que el código.",
    "scene": "house",
    "chapterId": "paloalto",
    "chapter": "Palo Alto",
    "kicker": "La casa",
    "year": "2004"
  },
  {
    "start": 182.61,
    "end": 192.43,
    "text": "Esa puerta es Peter Thiel. Invierte quinientos mil dólares y se queda con cerca del diez por ciento. Al año siguiente, Accel pone doce punto siete millones.",
    "scene": "house",
    "chapterId": "paloalto",
    "chapter": "Palo Alto",
    "kicker": "El dinero",
    "year": "2004"
  },
  {
    "start": 192.43,
    "end": 202.95,
    "text": "En 2005 compran el dominio facebook punto com por doscientos mil dólares y le quitan el «the» al nombre. Ya no es el directorio de una universidad. Empieza a ser una marca.",
    "scene": "house",
    "chapterId": "paloalto",
    "chapter": "Palo Alto",
    "kicker": "El nombre",
    "year": "2005"
  },
  {
    "start": 202.95,
    "end": 213.19,
    "text": "Hay otra regla silenciosa. Te piden el nombre real. No un apodo. No una máscara. Por eso tu madre te encuentra, tu clase te encuentra, tu pasado te encuentra.",
    "scene": "quad",
    "chapterId": "paloalto",
    "chapter": "Palo Alto",
    "kicker": "La regla",
    "year": "2005"
  },
  {
    "start": 213.19,
    "end": 225.81,
    "text": "También por eso la plaza es peligrosa para quien no puede pagar con su identidad. La red más grande del mundo no se diseñó para el anonimato. Se diseñó para que fueras verificable. Y lo verificable se anuncia mejor.",
    "scene": "quad",
    "chapterId": "paloalto",
    "chapter": "Palo Alto",
    "kicker": "La regla",
    "year": "2005"
  },
  {
    "start": 225.81,
    "end": 239.21,
    "text": "En septiembre de 2005 abren las preparatorias. En 2006, ciertas empresas. Y el 26 de septiembre de 2006 ocurre el salto: cualquiera mayor de trece años, con un correo válido, puede entrar.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "26 de septiembre",
    "year": "2006"
  },
  {
    "start": 239.21,
    "end": 246.41,
    "text": "La exclusividad que los hizo deseables se sacrifica por la escala. Facebook deja de ser un club. Se vuelve un país.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "26 de septiembre",
    "year": "2006"
  },
  {
    "start": 246.41,
    "end": 258.17,
    "text": "Tres semanas antes ya habían encendido el gesto que define al producto. El 5 de septiembre de 2006 nace el News Feed. Hasta ese día tú visitabas el perfil de un amigo, una puerta a la vez.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "News Feed",
    "year": "2006"
  },
  {
    "start": 258.17,
    "end": 270.05,
    "text": "Ahora el perfil viene a ti. Todo junto. Quién terminó con quién. Qué foto. Qué grupo. En horas aparece una protesta: Estudiantes contra el News Feed. Crece a cientos de miles.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "News Feed",
    "year": "2006"
  },
  {
    "start": 270.05,
    "end": 281.19,
    "text": "La gente se siente espiada por una máquina que ellos mismos alimentan. Zuckerberg publica una nota. En el fondo dice: cálmense, respiren, los escuchamos. Y no apaga el Feed.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "News Feed",
    "year": "2006"
  },
  {
    "start": 281.19,
    "end": 291.59,
    "text": "Lo ajusta. Lo deja vivo. Porque entiende algo que todavía no queremos admitir. Nadie va a volver a caminar de perfil en perfil. El río gana. El río es Facebook.",
    "scene": "feed",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "News Feed",
    "year": "2006"
  },
  {
    "start": 291.59,
    "end": 306.03,
    "text": "Ese mismo año Yahoo ofrece cerca de mil millones de dólares. Zuckerberg dice que no. En 2007 Microsoft paga doscientos cuarenta millones por el uno punto seis por ciento. El mercado hace una cuenta obscena: unos quince mil millones.",
    "scene": "photos",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "No vender",
    "year": "2006"
  },
  {
    "start": 306.03,
    "end": 319.67,
    "text": "En mayo de 2007 abren la plataforma a desarrolladores. Tu perfil se llena de granjas, mafias y regalos. Parece un juguete. Es un ensayo: otros construyen el hábito, Facebook se queda con la atención y con el mapa.",
    "scene": "photos",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "La plataforma",
    "year": "2007"
  },
  {
    "start": 319.67,
    "end": 330.65,
    "text": "Ese año lanzan Beacon, que publica en tu Feed compras hechas en otros sitios. El sofá que acabas de pagar aparece delante de tus amigos. Beacon muere entre disculpas. La ambición no.",
    "scene": "photos",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "Beacon",
    "year": "2007"
  },
  {
    "start": 330.65,
    "end": 344.19,
    "text": "El lema de entonces cabe en una frase: muévete rápido y rompe cosas. Suena a juventud. Significa que la escala llega primero y la reparación, si llega, viene después. En 2008 cruzan cien millones de usuarios.",
    "scene": "photos",
    "chapterId": "rio",
    "chapter": "El río",
    "kicker": "Cien millones",
    "year": "2008"
  },
  {
    "start": 344.19,
    "end": 353.99,
    "text": "En febrero de 2009 llega el botón que va a entrenar a media humanidad. Me gusta. Un clic. Una dosis. Una señal que le dice al sistema qué quieres volver a ver.",
    "scene": "photos",
    "chapterId": "maquina",
    "chapter": "La máquina",
    "kicker": "Me gusta",
    "year": "2009"
  },
  {
    "start": 353.99,
    "end": 363.59,
    "text": "No es un adorno. Es un microscopio apuntado a tus reflejos. Y las fotos se vuelven el tesoro. Recuerdos que vivían en una caja de zapatos ahora viven en un servidor.",
    "scene": "photos",
    "chapterId": "maquina",
    "chapter": "La máquina",
    "kicker": "Me gusta",
    "year": "2009"
  },
  {
    "start": 363.59,
    "end": 375.58,
    "text": "Cumpleaños. Bebés. Protestas. La primera vez que alguien dice «nos vemos en Facebook», la calle y la pantalla se dan la mano. En julio de 2010 hay quinientos millones de personas activas al mes.",
    "scene": "photos",
    "chapterId": "maquina",
    "chapter": "La máquina",
    "kicker": "La plaza",
    "year": "2010"
  },
  {
    "start": 375.58,
    "end": 388.32,
    "text": "Ese octubre se estrena La red social. Un programador de sudadera se vuelve personaje de época. La película es brillante como drama y resbalosa como acta. Aun así fija algo verdadero: Facebook ya es un mito.",
    "scene": "photos",
    "chapterId": "maquina",
    "chapter": "La máquina",
    "kicker": "El mito",
    "year": "2010"
  },
  {
    "start": 388.32,
    "end": 397.22,
    "text": "El 4 de octubre de 2012 anuncian mil millones de usuarios activos al mes. Más o menos, una de cada siete personas vivas entra a la misma plaza.",
    "scene": "ipo",
    "chapterId": "maquina",
    "chapter": "La máquina",
    "kicker": "Mil millones",
    "year": "2012"
  },
  {
    "start": 397.22,
    "end": 407.34,
    "text": "El 9 de abril de 2012 compran Instagram por unos mil millones de dólares. Muchos se ríen. Una aplicación de filtros, un equipo diminuto, sin un negocio claro.",
    "scene": "photos",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "Instagram",
    "year": "2012"
  },
  {
    "start": 407.34,
    "end": 413.62,
    "text": "Zuckerberg no está comprando filtros. Está comprando el lugar donde la cultura joven va a vivir. El teléfono.",
    "scene": "photos",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "Instagram",
    "year": "2012"
  },
  {
    "start": 413.62,
    "end": 424.38,
    "text": "El 18 de mayo de 2012 Facebook sale a bolsa. Treinta y ocho dólares por acción. Unos dieciséis mil millones recaudados. Una valoración por encima de los cien mil millones.",
    "scene": "ipo",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "18 de mayo",
    "year": "2012"
  },
  {
    "start": 424.38,
    "end": 433.0,
    "text": "Es una de las salidas más esperadas de la historia de la tecnología. También es un tropiezo. Nasdaq falla el día del estreno. La acción no despega.",
    "scene": "ipo",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "El tropiezo",
    "year": "2012"
  },
  {
    "start": 433.0,
    "end": 442.54,
    "text": "En los meses siguientes pierde más de la mitad de su valor. El miedo tiene un nombre corto. Móvil. Facebook nació en el escritorio, y el mundo ya vive en el bolsillo.",
    "scene": "ipo",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "Móvil",
    "year": "2012"
  },
  {
    "start": 442.54,
    "end": 455.9,
    "text": "Luego hace lo que pocos gigantes asustados consiguen. Reescribe el producto. Aplicaciones nativas. Anuncios en la pantalla pequeña, medidos al milímetro. Para 2013 el móvil ya es el negocio. La acción vuelve.",
    "scene": "campus",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "El regreso",
    "year": "2013"
  },
  {
    "start": 455.9,
    "end": 465.12,
    "text": "En febrero de 2014 compran WhatsApp por unos diecinueve mil millones de dólares. Países enteros donde esa aplicación es, en la práctica, internet.",
    "scene": "campus",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "WhatsApp",
    "year": "2014"
  },
  {
    "start": 465.12,
    "end": 475.8,
    "text": "El mismo año compran Oculus, la apuesta de la realidad virtual, por alrededor de dos mil millones. Ya no quieren ser un sitio web. Quieren ser la capa entre tú y los demás.",
    "scene": "vr",
    "chapterId": "bolsa",
    "chapter": "Salir a bolsa",
    "kicker": "Oculus",
    "year": "2014"
  },
  {
    "start": 475.8,
    "end": 485.48,
    "text": "Toda capa cobra un peaje. En 2016 la plaza se llena de una palabra incómoda: desinformación. El Feed no premia la verdad. Premia la reacción.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "El incentivo",
    "year": "2016"
  },
  {
    "start": 485.48,
    "end": 497.46,
    "text": "El enojo, el miedo y la burla hacen clic. El clic sostiene el negocio. No hace falta un complot de película. Basta un incentivo, repetido miles de millones de veces al día.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "El incentivo",
    "year": "2016"
  },
  {
    "start": 497.46,
    "end": 507.24,
    "text": "Ese año Instagram copia las historias de Snapchat. Veinticuatro horas y desaparecen. Snapchat imaginó el gesto. Instagram ya tenía a la gente.",
    "scene": "photos",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "Las historias",
    "year": "2016"
  },
  {
    "start": 507.24,
    "end": 513.46,
    "text": "La lección es fría. No siempre gana quien inventa. A veces gana quien ya tiene la llave de tu casa.",
    "scene": "photos",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "Las historias",
    "year": "2016"
  },
  {
    "start": 513.46,
    "end": 526.24,
    "text": "En marzo de 2018 el incentivo estalla con nombre propio. Cambridge Analytica. Una aplicación de personalidad cosecha datos de quien la instala y, por las reglas de entonces, también de sus amigos.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "Cambridge Analytica",
    "year": "2018"
  },
  {
    "start": 526.24,
    "end": 538.7,
    "text": "La cifra que la empresa termina reconociendo llega hasta ochenta y siete millones de perfiles. Esos datos alimentan trabajo político. El mundo dice una frase que parecía imposible: borrar Facebook.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "87 millones",
    "year": "2018"
  },
  {
    "start": 538.7,
    "end": 554.42,
    "text": "Zuckerberg declara ante el Congreso de Estados Unidos. En 2019 la Comisión Federal de Comercio impone una multa de cinco mil millones de dólares. Es enorme. Para una máquina de ese tamaño, también puede leerse como un costo, no como una tumba.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "La multa",
    "year": "2019"
  },
  {
    "start": 554.42,
    "end": 565.62,
    "text": "En septiembre de 2021, Frances Haugen, exempleada, entrega documentos internos a la prensa y habla ante el Senado. Los papeles cuentan algo más incómodo que un accidente.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "Los papeles",
    "year": "2021"
  },
  {
    "start": 565.62,
    "end": 579.24,
    "text": "La empresa, en muchos casos, conocía el daño. El efecto sobre adolescentes. La forma en que el sistema empujaba lo extremo, porque lo extremo sostiene la mirada. Saber, y cambiar tarde, es el corazón del escándalo.",
    "scene": "hearing",
    "chapterId": "precio",
    "chapter": "El precio",
    "kicker": "Los papeles",
    "year": "2021"
  },
  {
    "start": 579.24,
    "end": 590.64,
    "text": "El 28 de octubre de 2021 Zuckerberg anuncia que la compañía ya no se llama Facebook. Se llama Meta. El argumento es un internet al que entras, no uno que miras de lejos.",
    "scene": "campus",
    "chapterId": "meta",
    "chapter": "Meta",
    "kicker": "El nuevo nombre",
    "year": "2021"
  },
  {
    "start": 590.64,
    "end": 602.96,
    "text": "Se invierten decenas de miles de millones de dólares. Gafas. Plazas vacías. Avatares que el público convierte en chiste. La realidad virtual acumula pérdidas que casi ningún negocio sobreviviría.",
    "scene": "vr",
    "chapterId": "meta",
    "chapter": "Meta",
    "kicker": "El metaverso",
    "year": "2022"
  },
  {
    "start": 602.96,
    "end": 615.74,
    "text": "En 2022 la acción se cae. En 2023 Zuckerberg declara el año de la eficiencia. Hay decenas de miles de despidos. El metaverso no se borra, pero deja de ser la única apuesta.",
    "scene": "vr",
    "chapterId": "meta",
    "chapter": "Meta",
    "kicker": "Eficiencia",
    "year": "2023"
  },
  {
    "start": 615.74,
    "end": 626.06,
    "text": "Entran modelos propios de inteligencia artificial. Y en julio de 2023 nace Threads, una red de texto, justo cuando la gente busca otra plaza para hablar.",
    "scene": "campus",
    "chapterId": "meta",
    "chapter": "Meta",
    "kicker": "Threads",
    "year": "2023"
  },
  {
    "start": 626.06,
    "end": 633.02,
    "text": "Otra vez la misma jugada. Si el hábito cambia de casa, compra la casa, o construye una antes del jueves.",
    "scene": "campus",
    "chapterId": "meta",
    "chapter": "Meta",
    "kicker": "La jugada",
    "year": "2023"
  },
  {
    "start": 633.02,
    "end": 643.7,
    "text": "El nombre no nació en un servidor. En las casas de Harvard se imprimía un facebook: un cuaderno con la foto y el nombre de cada residente, para reconocer a quien cruzabas en el pasillo.",
    "scene": "dorm",
    "chapterId": "cuaderno",
    "chapter": "El cuaderno",
    "kicker": "El nombre",
    "year": "2003"
  },
  {
    "start": 643.7,
    "end": 653.72,
    "text": "Zuckerberg tomó ese objeto de papel y lo volvió infinito. Lo que antes se hojeaba en una casa, ahora se hojeaba en el mundo. El pasillo se hizo del tamaño del planeta.",
    "scene": "dorm",
    "chapterId": "cuaderno",
    "chapter": "El cuaderno",
    "kicker": "El nombre",
    "year": "2004"
  },
  {
    "start": 653.72,
    "end": 667.9,
    "text": "En septiembre de 2011 el perfil se convierte en Timeline. Tu vida, ordenada como una crónica. Y ese mismo año Messenger se separa y se vuelve una aplicación propia. La conversación se muda al bolsillo y ya no vuelve.",
    "scene": "quad",
    "chapterId": "cuaderno",
    "chapter": "El cuaderno",
    "kicker": "El nombre",
    "year": "2011"
  },
  {
    "start": 667.9,
    "end": 679.12,
    "text": "Hay una frase que conviene decir despacio. Tú no pagas Facebook. Pagas con otra moneda. El anunciante compra un lugar en medio de tus amigos, y tu atención es el producto que se entrega.",
    "scene": "photos",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Tú no pagas",
    "year": "2012"
  },
  {
    "start": 679.12,
    "end": 694.49,
    "text": "El diseño se nota en un gesto pequeño. Entras a ver si alguien te escribió. Cuarenta minutos después conoces las vacaciones de una persona que no ves desde hace años, una pelea que no era tuya, y un objeto que no necesitabas. No falló. Funcionó.",
    "scene": "phone",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Cuarenta minutos",
    "year": "2014"
  },
  {
    "start": 694.49,
    "end": 710.37,
    "text": "Lo que vuelve imposible irse no es el escándalo. Es lo aburrido. El grupo de la escuela. El perro perdido del barrio. La cuna usada. El recordatorio de cumpleaños que se acuerda de tu tía mejor que tú. Eso se siente como cuidado. También es un anzuelo.",
    "scene": "feed",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Lo aburrido",
    "year": "2016"
  },
  {
    "start": 710.37,
    "end": 728.39,
    "text": "En 2019 la ambición deja de disfrazarse. Anuncian Libra, una moneda propia para mover dinero entre países desde la misma aplicación donde hablas con tu madre. Los reguladores la frenan. El proyecto se apaga. Queda la pista: no querían solo la plaza. Querían la caja.",
    "scene": "campus",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Libra",
    "year": "2019"
  },
  {
    "start": 728.39,
    "end": 747.21,
    "text": "Cuando TikTok enseña un gesto nuevo, el video corto que no termina, Instagram lo copia. Otra vez. Primero fueron las historias. Después, Reels. La lección se repite hasta volverse un método: observa dónde se va la mirada, y construye la puerta antes de que la gente aprenda a vivir sin ti.",
    "scene": "photos",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Otra vez",
    "year": "2020"
  },
  {
    "start": 747.21,
    "end": 761.17,
    "text": "Por eso borrar la cuenta duele más que cancelar un servicio. No estás apagando un programa. Estás apagando el álbum, el directorio y, a veces, el único hilo con alguien. La salida existe. Casi nunca se siente gratis.",
    "scene": "hearing",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "La salida",
    "year": "2021"
  },
  {
    "start": 761.17,
    "end": 777.67,
    "text": "En gran parte de América Latina, WhatsApp deja de ser una aplicación y se vuelve el teléfono. El grupo de la familia. El pedido de la fonda. La tarea de la escuela. La cita con el médico. Salir de esa empresa no es dejar un pasatiempo. Es salir de la vida práctica.",
    "scene": "phone",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "América Latina",
    "year": "2016"
  },
  {
    "start": 777.67,
    "end": 793.45,
    "text": "También está la luz en el techo. Alguien, boca arriba, a medianoche. El pulgar baja. El azul le pinta la cara. No busca nada. Busca el siguiente segundo. Esa es la obra, y es la herida: una máquina que convirtió el aburrimiento en un lugar.",
    "scene": "phone",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "Medianoche",
    "year": "2018"
  },
  {
    "start": 793.45,
    "end": 809.09,
    "text": "Y cuando crees que ya lo viste todo, aparece un anuncio de algo que mencionaste cerca del teléfono, no dentro de él. A veces es coincidencia. A veces es un píxel invisible que te siguió a otra página. La plaza no termina en la aplicación. Te sigue a la calle.",
    "scene": "hearing",
    "chapterId": "negocio",
    "chapter": "El negocio",
    "kicker": "El píxel",
    "year": "2018"
  },
  {
    "start": 809.09,
    "end": 819.99,
    "text": "En 2020, cuando el mundo se encierra, la plaza digital se vuelve la única calle. Cumpleaños por video. Clases. Duelo. Rumores que corren más rápido que el virus.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "2020",
    "year": "2020"
  },
  {
    "start": 819.99,
    "end": 827.61,
    "text": "Facebook es refugio y es megáfono. Las dos cosas al mismo tiempo. Esa contradicción ya no se puede separar del producto.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "2020",
    "year": "2020"
  },
  {
    "start": 827.61,
    "end": 836.49,
    "text": "Hoy la aplicación Facebook no es la estrella única de su casa. Instagram es la cultura. WhatsApp es la infraestructura. Messenger es el pasillo.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "Hoy",
    "year": "2026"
  },
  {
    "start": 836.49,
    "end": 843.09,
    "text": "Facebook es la plaza de quienes crecieron con ella, y también un archivo. El álbum familiar del siglo veintiuno.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "Hoy",
    "year": "2026"
  },
  {
    "start": 843.09,
    "end": 856.23,
    "text": "A mediados de 2026, Meta informa cerca de tres mil seiscientos millones de personas activas al día en el conjunto de sus plataformas. No es solo una red social. Es un sistema operativo de la vida cotidiana.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "El precio",
    "year": "2026"
  },
  {
    "start": 856.23,
    "end": 864.73,
    "text": "Y el precio de entrada nunca fue cero. El precio fuiste tú. Tus fotos. Tus amistades. La hora que ibas a usar en otra cosa.",
    "scene": "phone",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "El precio",
    "year": "2026"
  },
  {
    "start": 864.73,
    "end": 873.75,
    "text": "Queda la pregunta que Facemash ya hacía, sin nombrarla, en un cuarto con la ventana fría. Qué pasa cuando le entregas a una máquina el mapa de quién eres.",
    "scene": "city",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "La pregunta",
    "year": ""
  },
  {
    "start": 873.75,
    "end": 879.55,
    "text": "La máquina aprende. Y aprende, sobre todo, a mostrarte solo el camino que te hace quedarte.",
    "scene": "city",
    "chapterId": "ahora",
    "chapter": "Esta noche",
    "kicker": "La pregunta",
    "year": ""
  },
  {
    "start": 879.55,
    "end": 887.59,
    "text": "Si esta historia te sostuvo hasta aquí, quédate cerca. En InodeAI hacemos documentales para mirar el mundo con más calma y más filo.",
    "scene": "city",
    "chapterId": "cierre",
    "chapter": "Sígueme",
    "kicker": "InodeAI",
    "year": ""
  },
  {
    "start": 887.59,
    "end": 900.0,
    "text": "Suscríbete. Activa la campana. Y dime en los comentarios qué capítulo te pareció el más increíble. El próximo empieza cuando tú llegas.",
    "scene": "city",
    "chapterId": "cierre",
    "chapter": "Sígueme",
    "kicker": "InodeAI",
    "year": ""
  }
];

export const FILM_DURATION = 900.0;
