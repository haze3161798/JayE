export function formDataFormat(data: any): FormData {
    const format = (obj: any, keys: string[] = []) => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const formName = [...keys, key].map((k, i) => (i ? `[${k}]` : k)).join('');
        if (value instanceof Blob) {
          if (value instanceof File) {
            formData.append(formName, value, value.name);
          } else {
            formData.append(formName, value);
          }
        } else if (typeof value === 'object' && value !== null) {
          const obj = value[key] as any;
          format(obj, [...keys, key]);
        } else if (value !== undefined) {
          formData.append(formName, JSON.stringify(value));
        }
      });
    };
    const formData = new FormData();
    format(data);
    return formData;
  }