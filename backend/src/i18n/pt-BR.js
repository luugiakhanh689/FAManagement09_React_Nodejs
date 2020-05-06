/**
 * I18n dictionary for the en.
 */

const ptBR = {
  app: {
    title: 'Quản lý học viên FA 09',
  },

  auth: {
    passwordReset: {
      error: `Không tìm thấy email`,
    },
    emailAddressVerificationEmail: {
      error: `Không tìm thấy email`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'Người dùng có email này đã tồn tại',
      userNotFound: 'Không tìm thấy người dùng',
      disablingHimself: `Bạn không thể tự vô hiệu hóa`,
      revokingOwnPermission: `Bạn không thể thu hồi sự cho phép của chủ sở hữu của riêng bạn`,
    },
  },

  importer: {
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

  errors: {
    validation: {
      message: 'Xảy ra lỗi',
    },
  },

  emails: {
    invitation: {
      subject: `Bạn đã được mời đến ứng dụng {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Bạn đã được mời đến ứng dụng {0}.</p>
        <p>Nhấp vào liên kết này để đăng ký.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Cảm ơn,</p>
        <p>Nhóm {0} của bạn </p>
      `,
    },
    emailAddressVerification: {
      subject: `Xác nhận email của bạn cho {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Nhấp vào liên kết này để xác minh địa chỉ email của bạn.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Nếu bạn không yêu cầu xác minh địa chỉ này, xin vui lòng bỏ qua email này.</p>
        <p>Cám ơn,</p>
        <p>Nhóm ứng dụng {1}</p>
      `,
    },
    passwordReset: {
      subject: `Đặt lại mật khẩu cho {0}`,
      body: `
        <p>Xin chào,</p>
        <p>Theo liên kết này để thiết lập lại của bạn {0} với tài khoản của bạn {1}.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Nếu bạn chưa yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
        <p>Cám ơn,</p>
        <p>Nhóm của bạn {0}</p>
      `,
    },
  },
};

module.exports = ptBR;
