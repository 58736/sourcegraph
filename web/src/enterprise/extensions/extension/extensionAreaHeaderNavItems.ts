import { LockIcon } from 'mdi-react'
import { ExtensionAreaHeaderNavItem } from '../../../extensions/extension/ExtensionAreaHeader'
import { extensionAreaHeaderNavItems } from '../../../extensions/extension/extensionAreaHeaderNavItems'

export const enterpriseExtensionAreaHeaderNavItems: ReadonlyArray<ExtensionAreaHeaderNavItem> = [
    ...extensionAreaHeaderNavItems,
    {
        condition: context =>
            !!context.extension.registryExtension && context.extension.registryExtension.viewerCanAdminister,
        to: '/-/manage',
        icon: LockIcon,
        label: 'Manage',
    },
]
