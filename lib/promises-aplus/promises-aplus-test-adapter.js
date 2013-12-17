var isFunction = function isFunction(value){return typeof value == 'function';}

var $q = qFactory(process.nextTick, function noopExceptionHandler() {});

exports.resolved = $q.resolve;
exports.rejected = $q.reject;
exports.deferred = function () {
  return $q.defer();
};
