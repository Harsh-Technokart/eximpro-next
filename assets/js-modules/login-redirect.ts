export const rerouter = (res: any, router: any) => {
  console.log("response: ", res);
  switch (res.data.user_type) {
    case "ORB_OWNER":
      router.push("/systum-users/exim-owner");
      break;
    case "ORB_SUB_OWNER":
      router.push("/systum-users/exim-subowner");
      break;
    case "ORB_SUPER_ADMIN":
      router.push("/systum-users/exim-superadmin");
      break;
    case "COMPANY_OWNER":
      router.push("/company-users/company-owner");
      break;
    case "COMPANY_SUPER_ADMIN":
      router.push("/company-users/company-superadmin");
      break;
    case "COMPANY_SUB_OWNER":
      router.push("/company-users/company-subowner");
      break;
    case "COMPANY_FINANCE":
      router.push("/company-users/finance");
      break;
    case "COMPANY_SALES":
      router.push("/company-users/sales");
      break;
    case "COMPANY_LOGISTICS":
      router.push("/company-users/logistics");
      break;
    case "COMPANY_PURCHASE":
      router.push("/company-users/purchase");
      break;
    case "COMPANY_HEDGER":
      router.push("/company-users/hedger");
      break;
    default:
      break;
  }
};
