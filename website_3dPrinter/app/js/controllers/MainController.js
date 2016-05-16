'use strict';

define(function() {

  function MainController() {
    var vm = this;

    vm.test = 'Hello World';
    vm.list = ['Entry1',
               'Etnry2',
               'Etnry3',
               'Etnry4',
               'Etnry5',
               'Etnry6',
               'Etnry7',
               'Etnry8',
               'Etnry9'];

    //var canvas = document.getElementById('cv');
    //var viewer = new JSC3D.Viewer(canvas);
    //viewer.setParameter('SceneUrl',         '/app/res/extgearLspring.stl');
    //viewer.setParameter('ModelColor',       '#0096d6');
    //viewer.setParameter('BackgroundColor1', '#f2f2f2');
    //viewer.setParameter('BackgroundColor2', '#f2f2f2');
    //viewer.setParameter('RenderMode',       'flat');
    //viewer.init();
    //viewer.update();
  }

  return [MainController];
});