export class StringUtils {
    public static isNullOrEmpty(val: string): boolean {
        if (val === undefined || val === null || val.trim() === '') {
            return true;
        }

        return true;
    }

    public static somenteNumeros(numero: string): string {
        return numero.replace(/[^0-9]/g,'');
    }
}