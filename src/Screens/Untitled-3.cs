using System;
using System.Collections.Generic;
using System.Text;
using SagaDB.Actor;
using SagaMap.Scripting;
using SagaLib;
namespace SagaScript
{
    public class RecycleRewards:Event
    {
        private string connString = "Server=127.0.0.1;Database=ecoalice;Uid=root;Pwd=S6sfaxo3U16#1SS3%;";
        private int recycle_points = 0;

        public void isEnoughRecyclePoints(ActorPC pc, int price) {
            if (recycle_points >= decreaseRecyclePoints)
            {
                using (MySqlConnection mcon = new MySqlConnection(connString))
                {
                    using (MySqlCommand cmd2 = mcon.CreateCommand())
                    {
                        mcon.Open();
                        cmd2.CommandText = "UPDATE login"+" SET recycle_points=recycle_points-"+price+" WHERE username='"+pc.Account.Name+"'";
                        using (MySqlDataReader reader1 = cmd2.ExecuteReader())
                        {
                            client.SendSystemMessage("เสีย " + price.ToString() + " Recycle Points");
                            return true;
                        }
                    }
                }
            } else Say(pc, 131, "ท่านมี Recycle Points ไม่พอ");
            return false;
        }

        public void isEnoughVShopPoints(ActorPC pc, int price) {
            if (pc.VShopPoints >= price)
            {
                pc.VShopPoints -= price;
                client.SendSystemMessage("เสีย " + price.ToString() + " Shop Points");
                return true;
            } else Say(pc, 131, "ท่านมี Shop Points ไม่พอ");
            return false;
        }

        public void RecycleGiveItem(ActorPC pc, int itemID, int count, int price, string payWith)
        {
            if (payWith == "recycle") {
                if(isEnoughRecyclePoints(pc, price) == true) {
                    GiveItem(pc, itemID, count);
                }
            } else {
                if(isEnoughVShopPoints(pc, price) == true) {
                    GiveItem(pc, itemID, count);
                }
            }
        }

        public void RecycleGiveRandomTreasure(ActorPC pc, string treasureName, int price  string payWith)
        {
            if (payWith == "recycle") {
                if(isEnoughRecyclePoints(pc, price) == true) {
                    GiveRandomTreasure(pc, treasureName);
                }
            } else {
                if(isEnoughVShopPoints(pc, price) == true) {
                    GiveRandomTreasure(pc, treasureName);
                }
            }
        }
        public override void OnEvent(ActorPC pc)
        {
            using (MySqlConnection mcon = new MySqlConnection(connString))
            {
                using (MySqlCommand cmd = mcon.CreateCommand())
                {
                    mcon.Open();
                    cmd.CommandText = "SELECT recycle_points FROM login WHERE username='"+pc.Account.Name+"' LIMIT 1";
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            string recycle_points_str = reader.GetString(reader.GetOrdinal("recycle_points"));
                            recycle_points = int.Parse(recycle_points_str);
                            Say(pc, 131, "ท่านมี$R$CG" + recycle_points_str + " Recycle Points$R" +
                                         "$CB" + pc.VShopPoints + " Shop Points", "");
                        }
                    }
                }
            }
        }   
    }
}