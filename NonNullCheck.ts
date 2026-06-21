function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

liveDangerously(528);
liveDangerously(1500);
 