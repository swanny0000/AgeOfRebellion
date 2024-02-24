export const Talents = {
  talents: {
    grit: {
      description: "",
      ranked: true,
      max_rank: 3
    }
  },
  get allTalents() {
    var list = [];
    for (var talent in this.talents) {list.push(skill);}
    return list;
  }
}