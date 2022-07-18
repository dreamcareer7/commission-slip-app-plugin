export default (sequelize, Sequelize) => {
  const RoleDataModel = sequelize.define("role_datas", {
    deal_id: {
      type: Sequelize.TEXT,
    },
    role_id: {
      type: Sequelize.TEXT,
    },
    legal_full_name: {
      type: Sequelize.TEXT,
    },
    role: {
      type: Sequelize.TEXT,
    },
    share_percent: {
      type: Sequelize.NUMERIC,
    },
    share_value: {
      type: Sequelize.NUMERIC,
    },
    note: {
      type: Sequelize.TEXT,
    },
    payment_unit_type: {
      type: Sequelize.INTEGER,
    },
    payment_value: {
      type: Sequelize.NUMERIC,
    },
  });
  return RoleDataModel;
};
