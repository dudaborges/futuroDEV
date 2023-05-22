using System;
using System.Data.SqlClient;
using System.Net;
using System.Net.Mail;
using System.Text;

public class Cliente
{
    private readonly string connectionString;

    public Cliente(string connectionString)
    {
        this.connectionString = connectionString;
    }

    public void EnviarEmail(string assunto, string corpo, string destinatario)
    {
        using (var mensagem = new MailMessage())
        {
            mensagem.To.Add(new MailAddress(destinatario));
            mensagem.Subject = assunto;
            mensagem.Body = corpo;

            using (var clienteSmtp = new SmtpClient("smtp.gmail.com", 587))
            {
                clienteSmtp.UseDefaultCredentials = false;
                clienteSmtp.EnableSsl = true;
                clienteSmtp.Credentials = new NetworkCredential("seuemail@gmail.com", "suasenha");
                clienteSmtp.Send(mensagem);
            }
        }
    }

    public void ImprimirRelatorioClientes()
    {
        using (var conexao = new SqlConnection(connectionString))
        {
            conexao.Open();

            var comando = new SqlCommand("SELECT * FROM Clientes", conexao);
            var leitor = comando.ExecuteReader();

            while (leitor.Read())
            {
                var sb = new StringBuilder();
                sb.AppendLine($"ID: {leitor["Id"]}");
                sb.AppendLine($"Nome: {leitor["Nome"]}");
                sb.AppendLine($"Email: {leitor["Email"]}");
                sb.AppendLine();

                Console.WriteLine(sb.ToString());
            }
        }
    }

    public void SalvarCliente(string nome, string email)
    {
        using (var conexao = new SqlConnection(connectionString))
        {
            conexao.Open();

            var comando = new SqlCommand("INSERT INTO Clientes (Nome, Email) VALUES (@Nome, @Email)", conexao);
            comando.Parameters.AddWithValue("@Nome", nome);
            comando.Parameters.AddWithValue("@Email", email);
            comando.ExecuteNonQuery();
        }
    }
}
