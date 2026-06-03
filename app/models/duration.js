import Model, { attr, belongsTo } from '@ember-data/model';

export default class DurationModel extends Model {
  @attr('number') duration;
  @belongsTo('task') task;
}
