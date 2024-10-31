using MediatR;
using RL.Backend.Models;

namespace RL.Backend.Commands
{
    public class AddUserToProcedureCommand : IRequest<ApiResponse<Unit>>
    {
        public AddUserToProcedureCommand()
        {
            UserIds = new List<int>();
        }
        public int PlanId { get; set; }
        public int ProcedureId { get; set; }
        public List<int> UserIds { get; set; }
    }
}