/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      trainer: 'trainer',
      trainee: 'trainee',
    };
  }
}

module.exports = Roles;
