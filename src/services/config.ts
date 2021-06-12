export class Configuration {
    //example
    public static get APP_URL(): string {return "https://hdrapi.muhfahmia.site";}
    public static get MENU_URL(): string {return "/assets/config/navitems.json";}
    public static get ITEM_URL(): string {return "/assets/responses/getItem.json";}

    //order
    public static get UPDATE_ORDER(): string {return "/shiva-oms-core-jvorder/orderService/updateOrder";}
    public static get GET_ITEM(): string {return "/shiva-oms-core-jvoperquery/jvoperQueryRestService/getItemCondition";}
    public static get GET_DISTRICT(): string {return "/rmds/district/area/bycode/";}

    //auth
    public static get PROFILE(): string {return '/profile'}

    //product
    public static get PRODUCT(): string {return '/product'}

} 