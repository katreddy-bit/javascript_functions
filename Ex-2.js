const circle={
    radius:1,
    get area(){
        return Math.PI*this.radius*this.radius;
    }
};
circle.radius=2;
console.log(circle.area);
