import ParksDatabase from '../parks';

export default function discourseHandler(r) {

  // In this exercise, we will enable a user to get various information about the park
  // he is requesting. In order to do this we must keep track of the park name that
  // the user is talking about. Then, when a user asks for details (#tellmeabout) about
  // that particular park, we must look up the park in the ParksDatabase and provide
  // the full park object in the response payload.
  //
  // We must also store the list of known parks in context, so that the conversation tooling
  // is aware of the known parks list

  // In order to complete this task, here is what you need to do:

  // 1. STORE THE KNOWN PARKS IN CONTEXT
  //    Modify the context object in the response, r to include the 'parks' property.
  //    Set the 'parks' property equal to the array of known park names.
  //    ** Only set the 'parks' property on the first dialog turn.
  //
  //    HINT: You can get the array of parks by calling, ParksDatabase.all()
  //    HINT: You can determine the dialog turn by inspecting the system object
  //    NOTE: ParksDatabase.all() returns a list of park objects, not park names

  if(r.context.system.dialog_turn_counter === 1) {
    r.context.lab = "Yorktown";
  }

  // 2. STORE THE PARK NAME THAT THE USER IS CURRENTLY ASKING ABOUT
  //    Examine the entities object in the response, r
  //    If the 'NationalParks' entity is detected, update the context object
  //    to include the property 'park' and set 'park' equal to the value
  //    of the NationalParks entity
  const labEntity = r.entities.find(e => e.entity === 'lab');
  if (labEntity) {
    r.context.lab = labEntity.value;
  }

  // 3. RETURN THE PARK OBJECT WITH THE RESPONSE PAYLOAD
  //    Examine the intents object in the response, r
  //    If the top intent is the 'tellmeabout' intent, then do the following:
  //    - Get the 'park' name from the response's context object
  //    - Add the property, 'park' to the response's output object
  //    - Set the value of 'park' to the park object
  //
  //    HINT: You can get the parks object by calling ParksDatabase.byName(parkName);

  if(r.intents.length === 0) {
    return r;
  }

  switch (r.intents[0].intent) {
    case 'tellmeabout' :
      const lab = r.context.lab;
      if(lab){
        r.output.lab = "WOOHOO THIS WORKED";
      }
      return r;

    default:
    return r;
  }
}
