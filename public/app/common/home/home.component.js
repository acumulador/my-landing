var home = {
    templateUrl: '/public/app/common/home/home.html',
    controller: homeController
};

angular
    .module('home')
    .component('home', home);
