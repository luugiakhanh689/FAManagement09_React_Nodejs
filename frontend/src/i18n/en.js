const en = {
  common: {
    active: 'Active',
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
  },

  app: {
    title: 'FA Management',
  },

  entities: {
    classRoom: {
      name: 'classRoom',
      label: 'Classes',
      menu: 'Classes',
      exporterFileName: 'Class_export',
      list: {
        menu: 'Classes',
        title: 'Classes',
      },
      create: {
        success: 'Class saved successfully',
      },
      update: {
        success: 'Class saved successfully',
      },
      destroy: {
        success: 'Class deleted successfully',
      },
      destroyAll: {
        success: 'Class(s) deleted successfully',
      },
      edit: {
        title: 'Edit Class',
      },
      fields: {
        id: 'Id',
        codeClass: 'Code Class',
        className: 'Class Name',
        limitRange: 'Limit',
        limit: 'Limit',
        admin: 'Admin',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        admin: {
          HanLTP: 'HanLTP',
          DanPL: 'DanPL',
          BinhNT44: 'BinhNT44',
          VanTT7: 'VanTT7',
        },
      },
      new: {
        title: 'New Class',
      },
      view: {
        title: 'View Class',
      },
      importer: {
        title: 'Import Classes',
        fileName: 'classRoom_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    course: {
      name: 'course',
      label: 'Courses',
      menu: 'Courses',
      exporterFileName: 'course_export',
      list: {
        menu: 'Courses',
        title: 'Courses',
      },
      create: {
        success: 'Course saved successfully',
      },
      update: {
        success: 'Course saved successfully',
      },
      destroy: {
        success: 'Course deleted successfully',
      },
      destroyAll: {
        success: 'Course(s) deleted successfully',
      },
      edit: {
        title: 'Edit Course',
      },
      fields: {
        id: 'Id',
        codeClass: 'Code Class',
        iDCourse: 'ID Course',
        courseName: 'Course Name',
        lectureName: 'Lecture Name',
        fromTimeRange: 'Time',
        fromTime: 'Time',
        toTimeRange: 'To Time',
        toTime: 'To Time',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Course',
      },
      view: {
        title: 'View Course',
      },
      importer: {
        title: 'Import Courses',
        fileName: 'course_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    assigment: {
      name: 'assigment',
      label: 'Assigments',
      menu: 'Assigments',
      exporterFileName: 'assigment_export',
      list: {
        menu: 'Assigments',
        title: 'Assigments',
      },
      create: {
        success: 'Assigment saved successfully',
      },
      update: {
        success: 'Assigment saved successfully',
      },
      destroy: {
        success: 'Assigment deleted successfully',
      },
      destroyAll: {
        success: 'Assigment(s) deleted successfully',
      },
      edit: {
        title: 'Edit Assigment',
      },
      fields: {
        id: 'Id',
        codeClass: 'Code Class',
        trainerID: 'TrainerID',
        fromDateRange: 'From Date',
        fromDate: 'From Date',
        toDateRange: 'To Date',
        toDate: 'To Date',
        status: 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Assigment',
      },
      view: {
        title: 'View Assigment',
      },
      importer: {
        title: 'Import Assigments',
        fileName: 'assigment_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    topic: {
      name: 'topic',
      label: 'Topics',
      menu: 'Topics',
      exporterFileName: 'topic_export',
      list: {
        menu: 'Topics',
        title: 'Topics',
      },
      create: {
        success: 'Topic saved successfully',
      },
      update: {
        success: 'Topic saved successfully',
      },
      destroy: {
        success: 'Topic deleted successfully',
      },
      destroyAll: {
        success: 'Topic(s) deleted successfully',
      },
      edit: {
        title: 'Edit Topic',
      },
      fields: {
        id: 'Id',
        course: 'Course',
        topicName: 'Topic Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Topic',
      },
      view: {
        title: 'View Topic',
      },
      importer: {
        title: 'Import Topics',
        fileName: 'topic_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    evaluation: {
      name: 'evaluation',
      label: 'Evaluations',
      menu: 'Evaluations',
      exporterFileName: 'evaluation_export',
      list: {
        menu: 'Evaluations',
        title: 'Evaluations',
      },
      create: {
        success: 'Evaluation saved successfully',
      },
      update: {
        success: 'Evaluation saved successfully',
      },
      destroy: {
        success: 'Evaluation deleted successfully',
      },
      destroyAll: {
        success: 'Evaluation(s) deleted successfully',
      },
      edit: {
        title: 'Edit Evaluation',
      },
      fields: {
        id: 'Id',
        trainee: 'Trainee',
        course: 'Course',
        topic: 'Topic',
        processRange: 'Process (20%)',
        process: 'Process (20%)',
        timelinessRange: 'Timeliness (20%)',
        timeliness: 'Timeliness (20%)',
        teamworkRange: 'Team work (50%)',
        teamwork: 'Team work (50%)',
        workqualityRange: 'Work quality (60%)',
        workquality: 'Work quality (60%)',
        presCommRange: 'Pressentation/Communication (50%)',
        presComm: 'Pressentation/Communication (50%)',
        academicMarkRange: 'Academic Mark (60%)',
        academicMark: 'Academic Mark (60%)',
        softskillRange: 'Soft Skill (25%)',
        softskill: 'Soft Skill (25%)',
        attDisRange: 'Attotide & Discơlinary (15%)',
        attDis: 'Attotide & Discơlinary (15%)',
        comment: 'Comment',
        finalGradeRange: 'Final Grade',
        finalGrade: 'Final Grade',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Evaluation',
      },
      view: {
        title: 'View Evaluation',
      },
      importer: {
        title: 'Import Evaluations',
        fileName: 'evaluation_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Administrator',
      description: 'Full access to all resources',
    },
    trainer: {
      label: 'Trainer',
      description: 'Trainer accces',
    },
    trainee: {
      label: 'Trainee',
      description: 'Trainee accces',
    },
  },

  iam: {
    title: 'User',
    menu: 'User',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Statistical chart',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
