#!/usr/bin/env node

import {pressies,dayOnePressie, introStart, introEnd, ordinals} from "./strings"

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
