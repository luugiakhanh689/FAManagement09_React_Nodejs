import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [roles.owner],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [roles.owner],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      classRoomImport: {
        id: 'classRoomImport',
        allowedRoles: [roles.owner],
      },
      classRoomCreate: {
        id: 'classRoomCreate',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['classRoom'],
      },
      classRoomEdit: {
        id: 'classRoomEdit',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['classRoom'],
      },
      classRoomDestroy: {
        id: 'classRoomDestroy',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['classRoom'],
      },
      classRoomRead: {
        id: 'classRoomRead',
        allowedRoles: [roles.owner],
      },
      classRoomAutocomplete: {
        id: 'classRoomAutocomplete',
        allowedRoles: [roles.owner, roles.trainer],
      },

      courseImport: {
        id: 'courseImport',
        allowedRoles: [roles.owner],
      },
      courseCreate: {
        id: 'courseCreate',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['course'],
      },
      courseEdit: {
        id: 'courseEdit',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['course'],
      },
      courseDestroy: {
        id: 'courseDestroy',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['course'],
      },
      courseRead: {
        id: 'courseRead',
        allowedRoles: [roles.owner],
      },
      courseAutocomplete: {
        id: 'courseAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },

      assigmentImport: {
        id: 'assigmentImport',
        allowedRoles: [roles.owner],
      },
      assigmentCreate: {
        id: 'assigmentCreate',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['assigment'],
      },
      assigmentEdit: {
        id: 'assigmentEdit',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['assigment'],
      },
      assigmentDestroy: {
        id: 'assigmentDestroy',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['assigment'],
      },
      assigmentRead: {
        id: 'assigmentRead',
        allowedRoles: [roles.owner, roles.trainer],
      },
      assigmentAutocomplete: {
        id: 'assigmentAutocomplete',
        allowedRoles: [roles.owner, roles.trainer],
      },

      topicImport: {
        id: 'topicImport',
        allowedRoles: [roles.owner],
      },
      topicCreate: {
        id: 'topicCreate',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['topic'],
      },
      topicEdit: {
        id: 'topicEdit',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['topic'],
      },
      topicDestroy: {
        id: 'topicDestroy',
        allowedRoles: [roles.owner],
        allowedStorageFolders: ['topic'],
      },
      topicRead: {
        id: 'topicRead',
        allowedRoles: [roles.owner],
      },
      topicAutocomplete: {
        id: 'topicAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },

      evaluationImport: {
        id: 'evaluationImport',
        allowedRoles: [roles.owner, roles.trainer],
      },
      evaluationCreate: {
        id: 'evaluationCreate',
        allowedRoles: [roles.trainer],
        allowedStorageFolders: ['evaluation'],
      },
      evaluationEdit: {
        id: 'evaluationEdit',
        allowedRoles: [roles.trainer],
        allowedStorageFolders: ['evaluation'],
      },
      evaluationDestroy: {
        id: 'evaluationDestroy',
        allowedRoles: [roles.trainer],
        allowedStorageFolders: ['evaluation'],
      },
      evaluationRead: {
        id: 'evaluationRead',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },
      evaluationAutocomplete: {
        id: 'evaluationAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.trainer,
          roles.trainee,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
