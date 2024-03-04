export const user_type_formatter = (user_type: string) => {
  switch (user_type) {
    case "ORB_OWNER":
      return "Exim Owner";
    case "ORB_SUB_OWNER":
      return "Exim Subowner";
    case "ORB_SUPER_ADMIN":
      return "Exim Superadmin";
    case "COMPANY_OWNER":
      return "Company Owner";
    case "COMPANY_SUPER_ADMIN":
      return "Company Super Admin";
    case "COMPANY_SUB_OWNER":
      return "Company Sub Owner";
    case "COMPANY_FINANCE":
      return "Company Finance";
    case "COMPANY_SALES":
      return "Company Sales";
    case "COMPANY_LOGISTICS":
      return "Company Logistics";
    case "COMPANY_PURCHASE":
      return "Company Purchase";
    case "COMPANY_HEDGER":
      return "Company Hedger";
    default:
      return "";
  }
};
