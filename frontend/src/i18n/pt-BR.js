const ptBR = {
  common: {
    active: 'Đang hoạt động',
    or: 'hoặc',
    cancel: 'Hủy',
    reset: 'Làm lại',
    save: 'Lưu',
    search: 'Tìm kiếm',
    edit: 'Sửa',
    remove: 'Xóa',
    new: 'Tạo mới',
    export: 'Xuất file Excel',
    noDataToExport: 'Không có dữ liệu để xuất',
    import: 'Nhập file',
    discard: 'Loại bỏ',
    yes: 'Đồng ý',
    no: 'Không',
    pause: 'Tạm dừng',
    areYouSure: 'Bạn có chắc chứ ?',
    view: 'Xem',
    destroy: 'Xóa',
    mustSelectARow: 'Phải chọn một hàng',
  },

  app: {
    title: 'QUẢN LÝ HỌC VIÊN FA',
  },

  entities: {
    classRoom: {
      name: 'Class',
      label: 'Classes',
      menu: 'Classes',
      exporterFileName: 'Class_export',
      list: {
        menu: 'Classes',
        title: 'Classes',
      },
      create: {
        success: 'Tạo mới lớp học thành công',
      },
      update: {
        success: 'Cập nhật lớp học thnahf công',
      },
      destroy: {
        success: 'Xóa lớp học thành công',
      },
      destroyAll: {
        success: 'Xóa lớp học thành công',
      },
      edit: {
        title: 'Sửa thông tin lớp học',
      },
      fields: {
        id: 'Id',
        codeClass: 'Mã lớp',
        className: 'Tên lớp',
        limitRange: 'Giới hạn',
        limit: 'Giới hạn',
        admin: 'Người quản lý',
        createdAt: 'Tạo tại',
        updatedAt: 'Cập nhật tại',
        createdAtRange: 'Tạo tại',
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
        title: 'Tạo mới lớp học',
      },
      view: {
        title: 'Xem thông tin lớp học',
      },
      importer: {
        title: 'Nhập file Classes',
        fileName: 'classRoom_import_template',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },

    course: {
      name: 'Khóa học',
      label: 'Khóa học',
      menu: 'Khóa học',
      exporterFileName: 'Course_export',
      list: {
        menu: 'Khóa học',
        title: 'Khóa học',
      },
      create: {
        success: 'Tạo khóa học thành công',
      },
      update: {
        success: 'Cập nhật khóa học thành công',
      },
      destroy: {
        success: 'Xóa khóa học thành công',
      },
      destroyAll: {
        success: 'Xóa khóa học thành công',
      },
      edit: {
        title: 'Sửa khóa học',
      },
      fields: {
        id: 'Id',
        codeClass: 'Mã khóa học',
        iDCourse: 'ID Course',
        courseName: 'Tên khóa học',
        lectureName: 'Tên bài giảng',
        fromTimeRange: 'Thời gian',
        fromTime: 'Thời gian',
        toTimeRange: 'Thời gian kết thúc',
        toTime: 'Thời gian kết thúc',
        createdAt: 'Tạo tại',
        updatedAt: 'Cập nhật tại',
        createdAtRange: 'Tạo tại',
      },
      enumerators: {},
      new: {
        title: 'Tạo mới khóa học',
      },
      view: {
        title: 'Xem khóa học',
      },
      importer: {
        title: 'Nhập file khóa học',
        fileName: 'course_import_template',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },

    assigment: {
      name: 'Phân công',
      label: 'Phân công',
      menu: 'Phân công',
      exporterFileName: 'Assigment_exportados',
      list: {
        menu: 'Phân công',
        title: 'Phân công',
      },
      create: {
        success: 'Tạo mới phân công công việc thành công',
      },
      update: {
        success: 'Cập nhật phân công công việc thành công',
      },
      destroy: {
        success: 'Xóa phân công công việc thành công',
      },
      destroyAll: {
        success: 'Xóa phân công công việc thành công',
      },
      edit: {
        title: 'Sửa phân công công việc',
      },
      fields: {
        id: 'Id',
        codeClass: 'Mã lớp',
        trainerID: 'ID người hướng dẫn',
        fromDateRange: 'Từ ngày',
        fromDate: 'Từ ngày',
        toDateRange: 'Đến ngày',
        toDate: 'Đến ngày',
        status: 'Trạng thái',
        createdAt: 'Tạo tại',
        updatedAt: 'Cập nhật tại',
        createdAtRange: 'Xóa tại',
      },
      enumerators: {},
      new: {
        title: 'Tạo mới phân công công việc',
      },
      view: {
        title: 'Xem phân công công việc',
      },
      importer: {
        title: 'Nhập file phân công công việc',
        fileName: 'assigment_import_template',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },

    topic: {
      name: 'Chủ đề',
      label: 'Chủ đề',
      menu: 'Chủ đề',
      exporterFileName: 'Topic_export',
      list: {
        menu: 'Chủ đề',
        title: 'Chủ đề',
      },
      create: {
        success: 'Tạo chủ đề thành công',
      },
      update: {
        success: 'Cập nhật chủ đề thành công',
      },
      destroy: {
        success: 'Xóa chủ đề thành công',
      },
      destroyAll: {
        success: 'Xóa chủ đề thành công',
      },
      edit: {
        title: 'Sửa thông tin chủ đề',
      },
      fields: {
        id: 'Id',
        course: 'Khóa học',
        topicName: 'Tên chủ đề',
        createdAt: 'Tạo tại',
        updatedAt: 'Cập nhật tại',
        createdAtRange: 'Tạo tại',
      },
      enumerators: {},
      new: {
        title: 'Tạo chủ đề',
      },
      view: {
        title: 'Xem chủ đề',
      },
      importer: {
        title: 'Nhập file chủ đề',
        fileName: 'topic_template_import',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },

    evaluation: {
      name: 'Đánh giá',
      label: 'Đánh giá',
      menu: 'Đánh giá',
      exporterFileName: 'Evaluation_export',
      list: {
        menu: 'Đánh giá',
        title: 'Đánh giá',
      },
      create: {
        success: 'Tạo đánh giá thành công',
      },
      update: {
        success: 'Cập nhật đánh giá thành công',
      },
      destroy: {
        success: 'Xóa đánh giá thành công',
      },
      destroyAll: {
        success: 'Xóa đánh giá thành công',
      },
      edit: {
        title: 'Sửa đánh giá',
      },
      fields: {
        id: 'Id',
        trainee: 'Học viên',
        course: 'Khóa học',
        topic: 'Chủ đề',
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
        createdAt: 'Tạo tại',
        updatedAt: 'Cập nhật tại',
        createdAtRange: 'Tạo tại',
      },
      enumerators: {},
      new: {
        title: 'Tạo đánh giá',
      },
      view: {
        title: 'Xem đánh giá',
      },
      importer: {
        title: 'Nhập file đánh giá',
        fileName: 'evaluation_template_import',
        hint:
          'Các cột Tệp / Hình ảnh phải là URL của các tệp được phân tách bằng dấu cách.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Sửa thông tin cá nhân',
      success: 'Cập nhật thông tin cá nhân thành công',
    },
    createAnAccount: 'Tạo tài khoản',
    rememberMe: 'Ghi nhớ',
    forgotPassword: 'Quên mật khẩu',
    signin: 'Đăng nhập',
    signup: 'Đăng ký',
    signout: 'Đăng xuất',
    alreadyHaveAnAccount:
      'Bạn có sẵn sàng để tạo một tài khoản? Đăng nhập.',
    signinWithAnotherAccount:
      'Đăng ký, nếu bạn không có tài khoản',
    emailUnverified: {
      message: `
      Vui lòng xác nhận emai của bạn tại <strong>{0}</strong> để tiếp tục.`,
      submit: `Gửi lại xác minh email`,
    },
    emptyPermissions: {
      message: `
      Bạn chưa được cấp quyền. Chờ quản trị viên cấp quyền của bạn.`,
    },
    passwordResetEmail: {
      message: 'Gửi email đặt lại mật khẩu',
      error: `Email không xác thực`,
    },
    passwordReset: {
      message: 'Đặt lại mật khẩu',
    },
    emailAddressVerificationEmail: {
      error: `Email không xác thực`,
    },
    verificationEmailSuccess: `
    Xác nhận email đã được gửi thành công`,
    passwordResetEmailSuccess: `Email đặt lại mật khẩu đã được gửi thành công`,
    passwordResetSuccess: `
    Mật khẩu đã thay đổi thành công`,
    verifyEmail: {
      success: 'Email được xác minh thành công',
      message:
        'Đợi một lát, email của bạn đang được xác minh ...',
    },
  },

  roles: {
    owner: {
      label: 'Quản trị viên',
      description:
        'Toàn quyền truy cập vào tất cả các tài nguyên',
    },
    trainer: {
      label: 'Người hướng dẫn',
      description: 'Toàn quyền người hướng dẫn',
    },
    trainee: {
      label: 'Học viên',
      description: 'Toàn quyền học viên',
    },
  },

  iam: {
    title: 'Tài khoản',
    menu: 'Tài khoản',
    disable: 'Ngưng kích hoạt',
    disabled: 'Ngưng kích hoạt',
    enabled: 'Kích hoạt',
    enable: 'Kích hoạt',
    doEnableSuccess: 'Tài khoản kích hoạt thành công',
    doDisableSuccess:
      'Tài khoản ngưng kích hoạt thành công',
    doDisableAllSuccess: 'Tài khoản kích hoạt thành công',
    doEnableAllSuccess:
      'Tài khoản ngưng kích hoạt thành công',
    doAddSuccess: 'Thêm tài khoản thành công',
    doUpdateSuccess: 'Cập nhật tài khoản thành công',
    viewBy: 'Xem bởi',
    users: {
      name: 'Tài khoản',
      label: 'Tài khoản',
      exporterFileName: 'user_export',
      doRemoveAllSelectedSuccess:
        'Quyền đã được xóa thành công',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Quyền đã được xóa thành công',
    },
    edit: {
      title: 'Sửa thông tin tài khoản',
    },
    new: {
      title: 'Tạo mới tài khoản',
      titleModal: 'Tạo mới tài khoản',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'Xem thông tin tài khoản',
      activity: 'Hoạt động',
    },
    importer: {
      title: 'Nhập file tài khoản',
      fileName: 'user_template_import',
      hint:
        'Tệp / Hình ảnh phải là URL của tệp, được phân tách bằng dấu cách. Mối quan hệ phải là ID cách nhau không gian.',
    },
    errors: {
      userAlreadyExists:
        'Người dùng có email này đã tồn tại',
      userNotFound: 'Không tìm thấy người dùng',
      disablingHimself: `
      Bạn không thể tự vô hiệu hóa`,
      revokingOwnPermission: `Bạn không thể thu hồi sự cho phép của chủ sở hữu của riêng bạn`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id xác thực',
      avatars: 'Ảnh đại diện',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Tên đầy đủ',
      firstName: 'Tên',
      lastName: 'Họ',
      status: 'Trạng thái',
      disabled: 'Vô hiệu hóa',
      phoneNumber: 'Số điện thoại',
      role: 'Quyền',
      createdAt: 'Tạo tại',
      updatedAt: 'Đã cập nhật',
      roleUser: 'Hồ sơ / người dùng',
      roles: 'Hồ sơ',
      createdAtRange: 'Tạo tại',
      password: 'Mật khẩu',
      rememberMe: 'Ghi nhớ',
    },
    enabled: 'Kích hoạt',
    disabled: 'Vô hiệu hóa',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} không hợp lệ',
    },
  },

  auditLog: {
    menu: 'Hồ sơ kiểm toán',
    title: 'Hồ sơ kiểm toán',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Phân tách nhiều thực thể bằng ký tự dấu phẩy.',
    fields: {
      id: 'Id',
      timestampRange: 'Thời gian',
      entityName: 'Thực thể',
      entityNames: 'Thực thể',
      entityId: 'ID Thực thể',
      action: 'Hoạt động',
      values: 'Giá trị',
      timestamp: 'Dữ liệu',
      createdByEmail: 'Email người dùng',
    },
  },
  settings: {
    title: 'Cài đặt',
    menu: 'Cài đăt',
    save: {
      success:
        'Cài đặt được lưu thành công. Trang sẽ tải lại tại {0} để các thay đổi có hiệu lực.',
    },
    fields: {
      theme: 'Chủ đề',
    },
    colors: {
      default: 'Mặc định',
      cyan: 'Lục lam',
      'màu xanh': 'Màu xanh đậm',
      gold: 'Vàng',
      lime: 'Chanh',
      magenta: 'Màu đỏ tươi',
      orange: 'Cam',
      'xanh lá': 'xanh lá đậm',
      purple: 'Tím',
      red: 'Đỏ',
      volcano: 'Nham thạch',
      yellow: 'Vàng tươi',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} không hợp lệ',
      required: '${path} không được để trống',
      oneOf:
        '${path} phải là một trong những giá trị sau: ${values}',
      notOneOf:
        '${path} không được là một trong những giá trị sau: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} phải là một ${type}`;
      },
    },
    string: {
      length: '${path} phải sở hữu ${length} kí tự',
      min: '${path} ít nhất phải có ${min} ký tự',
      max: '${path} phải có nhiều nhất ${max} ký tự',
      matches:
        '${path} phải phù hợp với những điều sau đây: "${regex}"',
      email: '${path} phải là một email hợp lệ',
      url: '${path} phải là một URL hợp lệ',
      trim: '${path} phải là một từ không có khoảng trống',
      lowercase: '${path} phải là một chuỗi chữ thường',
      uppercase: '${path} phải là một chuỗi chữ hoa',
      selected: '${path} phải được chọn',
    },
    number: {
      min: '${path} phải lớn hơn hoặc bằng ${min}',
      max: '${path} phải nhỏ hơn hoặc bằng ${max}',
      lessThan: '${path} phải ít hơn ${less}',
      moreThan: '${path} phải nhiều hơn ${more}',
      notEqual: '${path} không dược bằng ${notEqual}',
      positive: '${path} phải là một số dương',
      negative: '${path} phải là số âm',
      integer: '${path} phải là một số nguyên',
    },
    date: {
      min: '${path} phải muộn hơn ${min}',
      max: '${path} phải sớm hơn ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} không thể có các thuộc tính không được chỉ định trong định dạng của đối tượng',
    },
    array: {
      min: '${path} ít nhất phải có ${min} mục',
      max: '${path} nhiều nhât là ${max} mục',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Tải lên',
    image: 'Bạn phải tải lên một hình ảnh',
    size:
      'Các tập tin quá lớn. Kích thước tối đa được phép là {0}',
    formats: `Định dạng không hợp lệ. Nó nên: '{0}'.`,
  },
  importer: {
    line: 'Dòng',
    status: 'Trạng thái',
    pending: 'Đang chờ xử lý',
    imported: 'Nhập file',
    error: 'lỗi',
    total: `{0} nhập file, {1} đang chờ xử lý và {2} có lỗi`,
    importedMessage: `Đã xử lý {0} của {1}.`,
    noNavigateAwayMessage:
      'Đừng rời khỏi trang này hoặc quá trình nhập sẽ dừng lại.',
    completed: {
      success:
        'Nhập file hoàn tất. Tất cả các dòng đã được nhập thành công.',
      someErrors:
        'Quá trình xử lý đã hoàn tất, nhưng một số dòng không thể được nhập.',
      allErrors: 'Nhập thất bại. Không có dòng hợp lệ.',
    },
    form: {
      downloadTemplate: 'Tải mẫu',
      hint:
        'Nhấp hoặc kéo tệp vào khu vực này để tiếp tục.',
    },
    list: {
      discardConfirm:
        'Bạn có chắc không Dữ liệu không quan trọng sẽ bị mất.',
    },
    errors: {
      invalidFileEmpty: 'Các tập tin trống',
      invalidFileExcel:
        'Chỉ cho phép các tệp Excel (.xlsx)',
      invalidFileUpload:
        'Tập tin không hợp lệ. Hãy chắc chắn rằng bạn đang sử dụng phiên bản mới nhất của mẫu.',
      importHashRequired: 'Nhập băm là bắt buộc',
      importHashExistent: 'Dữ liệu đã được nhập',
    },
  },

  autocomplete: {
    loading: 'Đang tải ...',
  },

  imagesViewer: {
    noImage: 'Không có hình',
  },

  firebaseErrors: {
    'auth/user-disabled':
      'Tài khoản của bạn bị vô hiệu hóa',
    'auth/user-not-found': `Xin lỗi, chúng tôi không nhận ra thông tin đăng nhập của bạn`,
    'auth/wrong-password': `Xin lỗi, chúng tôi không nhận ra thông tin đăng nhập của bạn`,
    'auth/weak-password': 'Mật khẩu này quá yếu',
    'auth/email-already-in-use': 'Email đã được sử dụng',
    'auth/invalid-email':
      'Vui lòng cung cấp một email hợp lệ',
    'auth/account-exists-with-different-credential':
      'Email đã được sử dụng cho một phương thức xác thực khác.',
    'auth/credential-already-in-use':
      'Thông tin đã được sử dụng',
  },
};

export default ptBR;
