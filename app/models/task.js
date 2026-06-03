import Model, { attr, hasMany } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') subject;
  @attr('number') priority;
  @hasMany('duration', { async: false }) durations;

  get instances() {
    return this.durations.length;
  }

  get totalDuration() {
    return this.durations.reduce((s, d) => s + d.duration, 0);
  }
}
