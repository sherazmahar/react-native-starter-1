import { mapDispatchToProps, mapStateToProps } from "./index"

export type SamplePageReduxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export interface SamplePageProps extends SamplePageReduxProps {}

export interface SamplePageState {
  id: string
}
