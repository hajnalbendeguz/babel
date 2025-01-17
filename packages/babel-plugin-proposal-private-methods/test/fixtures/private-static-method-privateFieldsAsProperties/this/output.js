class A {
  static get a() {
    return 1;
  }

}

var _getA = babelHelpers.classPrivateFieldLooseKey("getA");

var _getB = babelHelpers.classPrivateFieldLooseKey("getB");

class B extends A {
  static get b() {
    return 2;
  }

  static extract() {
    return [babelHelpers.classPrivateFieldLooseBase(this, _getA)[_getA], babelHelpers.classPrivateFieldLooseBase(this, _getB)[_getB]];
  }

}

var _getB2 = function _getB2() {
  return this.b;
};

Object.defineProperty(B, _getB, {
  value: _getB2
});

var _getA2 = function _getA2() {
  return babelHelpers.get(babelHelpers.getPrototypeOf(B), "a", this);
};

Object.defineProperty(B, _getA, {
  value: _getA2
});
const [getA, getB] = B.extract();
