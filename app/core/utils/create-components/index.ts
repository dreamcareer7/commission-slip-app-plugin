import { memo } from 'react'

export function createComponents(Components: CoreComponents): CoreComponents {
  return {
    Logo: memo((props: LogoProps) => Components.Logo(props)),
    RoleForm: Components.RoleForm,
    RoleCard: memo((props: RoleCardProps) => Components.RoleCard(props)),
    ContactRoles: memo((props: ContactRolesProps) =>
      Components.ContactRoles(props)
    ),
    Wizard: {
      QuestionWizard: memo((props: QuestionWizardProps) =>
        Components.Wizard.QuestionWizard(props)
      ),
      QuestionSection: memo((props: QuestionSectionProps) =>
        Components.Wizard.QuestionSection(props)
      ),
      QuestionTitle: memo((props: QuestionTitleProps) =>
        Components.Wizard.QuestionTitle(props)
      ),
      QuestionForm: memo((props: QuestionFormProps) =>
        Components.Wizard.QuestionForm(props)
      )
    }
  }
}
