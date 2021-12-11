import { Abstract } from '../abstract/abstract.repository';

class PostReaction extends Abstract {
  constructor({ postReactionModel }) {
    super(postReactionModel);
  }

  getPostReaction(userId, postId) {
    return this.model.query()
      .select()
      .where('user_id', userId)
      .andWhere('post_id', postId)
      .withGraphFetched('[post]')
      .first();
  }
}

export { PostReaction };
