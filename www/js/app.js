(function() {
    var app = angular.module('store', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
        $stateProvider
            .state('home', {
                templateUrl: "templates/home.html",
                url: "/home",
                controller: "StoreController"
            })
            .state('pedidos', {
                templateUrl: 'templates/pedidos.html',
                url: "/pedidos",
                controller: "PedidosController"
            })
            .state('perfil', {
                templateUrl: 'templates/perfil.html',
                url: "/informacion",
                controller: "PerfilController"
            })
            .state('favoritos', {
                templateUrl: 'templates/favoritos.html',
                url: "/favoritos",
                controller: "FavoritosController"
            })
    });

    app.controller('MainController', function($scope, $state) {
        $state.go("home");
    });
    var pedidos;
    app.controller('DashController', function($scope, $state, $http) {
        $http.get("http://localhost/bookStoreApp/api/pedidos.php").then(function(response) {
            pedidos = response.data;
        });
    });
    app.controller('PedidosController', function($scope, $state, $http) {
        this.pd = pedidos;
    });
    app.controller('PerfilController', function($scope, $state) {
        this.usuarios = datos;
        $scope.usuario = datos[1];
    });
    app.controller('FavoritosController', function($scope, $state) {

    });
    var datos = [{
        id: 1,
        nombre: "Juan Perez",
        email: "juan@email.com",
        password: "1234",
        direccion: "calle 3, #2111",
        cp: "31000",
        pais: "Mexico",
        ciudad: "Chihuahua"
    }, {
        id: 2,
        nombre: "ramon Perez",
        email: "ramon@email.com",
        password: "1234",
        direccion: "calle 5, #1543",
        cp: "31000",
        pais: "Mexico",
        ciudad: "Chihuahua"
    }];

})();
