<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200214001945 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE client CHANGE roles roles JSON NOT NULL');
        $this->addSql('ALTER TABLE smartphone CHANGE screen_size screen_size DOUBLE PRECISION DEFAULT NULL, CHANGE release_date release_date DATE DEFAULT NULL, CHANGE autonomy autonomy INT DEFAULT NULL, CHANGE os os VARCHAR(255) DEFAULT NULL, CHANGE weight weight INT DEFAULT NULL, CHANGE network network VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE client_id client_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE client CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE smartphone CHANGE screen_size screen_size DOUBLE PRECISION DEFAULT \'NULL\', CHANGE release_date release_date DATE DEFAULT \'NULL\', CHANGE autonomy autonomy INT DEFAULT NULL, CHANGE os os VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE weight weight INT DEFAULT NULL, CHANGE network network VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE user CHANGE client_id client_id INT NOT NULL');
    }
}
