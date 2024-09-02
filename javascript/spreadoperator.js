set1 = [1,2,3,4,5]
set2 = [...set1,6,5,7,8,9,10]
console.log(set2)
const Engg =
{
    sem : "V",
    branch : "DS"
};
const section =
{
    ...Engg ,
    noOfStudents : 70 
};
console.log(section)