export const Talents = {
  talents: {
    Grit: {
      description: "",
      ranked: true,
      max_rank: 3
    }
  },
  get all_talents() {
    var list = [];
    for (var talent in this.talents) {list.push(talent);}
    return list;
  }
}