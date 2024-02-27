export const Talents = {
  talents: {
    Grit: {
      description: "",
      ranked: true,
      max_rank: 3,
      page_aoe: 0
    },
    "Convincing Demeanor": {
      description: "",
      ranked: false,
      page_aoe: 0
    }
  },
  get all_talents() {
    var list = [];
    for (var talent in this.talents) {list.push(talent);}
    return list;
  },
  get ranked_talents() {
    var list = [];
    for (const talent in this.talents) {if (this.isRanked(talent)) {list.push(talent);}}
    return list;
  },
  isRanked: function(talent) {return this.talents[talent].ranked}
}