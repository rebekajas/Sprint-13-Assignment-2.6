enum TimeOfDay{
    morning="Good morning",
    afternoon="Good afternoon",
    evening="Good evening"
}
interface customer{
    name: string;
    loyaltyProgram: boolean;
    visited: number;
}
const gabriel: customer = {
    name: "Gabriel",
    loyaltyProgram: true,
    visited: 2

}

const greeting = (time_of_day: TimeOfDay, Customer: customer): string =>{
    const loyal = "thank you for being a valued customer!";
    const notLoyal = "thank you";
   let greeting = '${time_of_day} ${customer.name}!'

   greeting += Customer.loyaltyProgram ? loyal : notLoyal;
   return greeting;
}
console.log(greeting(TimeOfDay.morning, gabriel));