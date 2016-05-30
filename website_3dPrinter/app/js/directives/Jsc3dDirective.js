'use strict';

define(function() {
  function Jsc3dDirective() {
    return {
      restrict: 'A',
      scope : {
        model: '@'
      },
      link: function(scope, element, attr) {
        element.css('width', '50%');
        element.css('margin-top', '20px');
        element.css('margin-left',  '25%');

        var viewer = new JSC3D.Viewer(element[0]);
        viewer.setParameter('SceneUrl',         scope.model);
        viewer.setParameter('ModelColor',       '#0096d6');
        viewer.setParameter('BackgroundColor1', '#7f7f7f');
        viewer.setParameter('BackgroundColor2', '#7f7f7f');
        viewer.setParameter('RenderMode',       'flat');
        viewer.setParameter('Renderer',         'webgl');
        viewer.setParameter('Definition',       'high');
        viewer.init();
        viewer.update();
      }
    }
  }

  return [Jsc3dDirective];
});