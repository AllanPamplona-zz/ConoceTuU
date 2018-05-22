// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for visitados section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ],
      lugares:[
        {
          id: '1',
          name: 'El Hombre Creador de Energía',
          description: 'La escultura representa un hombre y una mujer en la cúspide de una flor de concreto. Sus brazos y manos, extendidos hacia arriba, indican la búsqueda del cosmos, de la luz, del conocimiento. La parte inferior se asemeja a un cactus o flor, que encierra la belleza a la vez que representa a la Universidad vista como estructura científica y humanística, en continúo movimiento.',
          autor: 'Rodrigo Arenas Betancur'
        },
        {
          id:'2',
          name: 'El sembrador de estrellas',
          description: 'La escultura representa a un sembrador, con un cesto lleno de estrellas en su brazo izquierdo, y depositando una de ellas en el suelo, con su mano derecha.          Según la facultad, representa "la actitud del ingeniero en sembrar la luz, el conocimiento, la búsqueda de la verdad, el progreso, la justicia y la paz."',
          autor: 'Alonso Rios Vanegas'
        },
      ],
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/home/'
});
var visitadosView = app.views.create('#view-visitados', {
  url: '/visitados/'
});
var rutasView = app.views.create('#view-rutas', {
  url: '/rutas/'
})



// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});