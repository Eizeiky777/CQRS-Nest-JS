import { AggregateRoot } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    console.log("🚀 ~ file: hero.model.ts ~ line 11 ~ Hero ~ killEnemy ~ enemyId", enemyId)
    // logic
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    console.log("🚀 ~ file: hero.model.ts ~ line 17 ~ Hero ~ addItem ~ itemId", itemId)
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }
}
