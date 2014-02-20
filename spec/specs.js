describe('factorial0', function () {
  it('if the input is 0, a 1 should be returned', function () {
    factorial0(0).should.equal(1);
  });
  it('should take a number and return its factorial', function() {
    factorialLesson(5).should.equal(120);
  });
});
//modification
