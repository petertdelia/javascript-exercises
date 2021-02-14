function createGreeter(bunny) {
  return {
    name: bunny,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${bunny}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${bunny}`;
          break;
        case 'evening':
          msg += `${this.evening} ${bunny}`;
          break;
      }
      console.log(bunny);
      console.log(this.name);

      console.log(msg);
    },
    
  };
}

let greeter = createGreeter('Pete');
console.log(greeter);

console.log(greeter.greet('morning'));