﻿using RL.Data.DataModels.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RL.Data.DataModels
{
    public class UserPlanProcedure : IChangeTrackable
    {
        public int PlanId { get; set; }
        public int ProcedureId { get; set; }
        public int UserId { get; set; }
        public virtual Plan Plan { get; set; }
        public virtual Procedure Procedure { get; set; }
        public virtual User User { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
