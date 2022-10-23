let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        return this.step;
    },
};

console.log(ladder.up().up().down().up().down().down().down().down().down().showStep());
console.log(ladder.up().up().down().up().showStep());
console.log(ladder.up().up().down().up().down().down().showStep());
