
const pressies = [
  "And a partridge in a pear tree.",
  "Two turtle doves,",
  "Three french hens,",
  "Four calling birds,",
  "Five golden rings,",
  "Six geese-a-laying,",
  "Seven swans-a-swimming,",
  "Eight maids-a-milking,",
  "Nine ladies dancing,",
  "Ten lords-a-leaping,",
  "Eleven pipers piping,",
  "Twelve drummers drumming,",
]
const dayOnePressie = "A partridge in a pear tree."
const introStart = "On the"
const introEnd = "day of Christmas,\nMy true love gave to me,\n"
const ordinals = ["zeroth", "first", "second", "third", "fourth", "fifth",
  "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

export default function main () {
  return [...Array(13).keys()].slice(1). // aka range(1, 13)
    map(dayNum =>
      `${introStart} ${ordinals[dayNum]} ${introEnd}` +
        ((dayNum === 1) ?
          dayOnePressie :
          pressies.
            slice(0, dayNum).
            reverse().
            join("\n")) + "\n").
    join("\n")
}

// only run the above function if we're the main script
if ( ! module.parent) {
  console.log(main());
}
