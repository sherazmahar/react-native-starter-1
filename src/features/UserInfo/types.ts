import { mapStateToProps } from "./index"

export type UserInfoReduxProps = ReturnType<typeof mapStateToProps>

export interface UserInfoProps extends UserInfoReduxProps {}
