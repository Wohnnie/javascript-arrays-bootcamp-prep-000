var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array, element){
  var array = [1];
  var array = ['foo', ...array]
  return array
}

addElementToBeginningOfArray(array, element);

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1];
  array.unshift('foo')
  return array
}

destructivelyAddElementToBeginningOfArray(array, element);

function addElementToEndOfArray(array, element) {
  var array = [1];
  var array = [...array, 'foo']
  return array
}

addElementToEndOfArray(array, element);

function destructivelyAddElementToEndOfArray(array, element){
  var array = [1];
  array.push('foo')
  return array
}

destructivelyAddElementToEndOfArray(array, element);
