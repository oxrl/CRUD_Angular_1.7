'use strict';

angular.module('myCRUD.version', [
  'myCRUD.version.interpolate-filter',
  'myCRUD.version.version-directive'
])

.value('version', '0.1');
