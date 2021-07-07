export const createCommand = (parameter: Exclude<CommandType,
    'latRequired' | 'longRequired' | 'altRequired' | 'shown' | 'spline' | 'isolated'
    | 'latModified' | 'longModified'>) => {
    return {
        latRequired: true,
        longRequired: true,
        altRequired: true,
        shown: true,
        spline: false,
        isolated: false,
        latModified: false,
        longModified: false,
        ...parameter
    }
}