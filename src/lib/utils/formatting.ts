export const prettyDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return date.toLocaleString();
};

export const prettyNumber = (n: number) => n.toLocaleString();

export const prettyBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const prettyTarget = (target: string) => {
  switch (target) {
    case 'WindowsNoEditor':
    case 'Windows':
      return 'Windows Client';
    case 'WindowsServer':
      return 'Windows Server';
    case 'LinuxServer':
      return 'Linux Server';
  }

  return target;
};

export const limitCharacters = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }

  return text.substring(0, limit) + '...';
};
