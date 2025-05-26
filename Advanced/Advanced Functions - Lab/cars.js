function solution(commands) {
  const objects = {};

  for (const line of commands) {
    const [command, name, ...rest] = line.split(" ");

    if (command === "create") {
      if (rest[0] === "inherit") {
        const parentName = rest[1];
        objects[name] = Object.create(objects[parentName]);
      } else {
        objects[name] = {};
      }
    } else if (command === "set") {
      const [key, value] = rest;
      objects[name][key] = value;
    } else if (command === "print") {
      const ownProps = Object.entries(objects[name]);
      const inheritedProps = [];

      let proto = Object.getPrototypeOf(objects[name]);
      while (proto) {
        for (const key of Object.keys(proto)) {
          if (!objects[name].hasOwnProperty(key)) {
            inheritedProps.push([key, proto[key]]);
          }
        }
        proto = Object.getPrototypeOf(proto);
      }

      const combined = [...ownProps, ...inheritedProps];
      const result = combined.map(([k, v]) => `${k}:${v}`).join(",");

      console.log(result);
    }
  }
}
