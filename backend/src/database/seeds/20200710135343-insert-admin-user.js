const bcrypt = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    const password_hash = await bcrypt.hash('admin123', 8);
    const users = [
      {
        email: 'admin@admin.com',
        password_hash,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  down: () => {},
};
