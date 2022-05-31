//Main Activity

public void NotifyBtn(View view) {
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, utils.CHANNEL_ID)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(utils.NOTI_TITLE)
                .setContentText(utils.NOTI_DESC)
                .setPriority(NotificationCompat.PRIORITY_HIGH)
                .setAutoCancel(true);


        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
        notificationManagerCompat.notify(utils.NOT_ID,builder.build());


    }
}

//NOTE

public class NOTE extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        notificationChannel();
    }

    private  void notificationChannel(){
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(utils.CHANNEL_ID,utils.CHANNEl_NAME,
                    NotificationManager.IMPORTANCE_HIGH);
        channel.setDescription(utils.CHANNEL_Desc);

            NotificationManager managerCompat = getSystemService(NotificationManager.class);
            managerCompat.createNotificationChannel(channel);

        }

    }
    
}




//Utils

public class utils {

    public static final  String CHANNEL_ID = "channel_id";
    public static final  String CHANNEl_NAME = "channel_id";
    public static final String CHANNEL_Desc = "channel desc";
    public static final String NOTI_TITLE = "title";
    public static final String NOTI_DESC = "desc";
    public static final int NOT_ID = 001;

}
