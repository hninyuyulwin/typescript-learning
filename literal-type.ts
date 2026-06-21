let state: string = "pending";
state = "success";
state = "rejected";

state = "done";

type State = "pening" | "success" | "rejected";

let state2: State = "pening";
// state2 = "another";

type Success = "success";
type Pending = "pending";
type Rejected = "rejected";

type State2 = Success | Rejected | Pending;

